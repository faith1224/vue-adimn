import { resolve, join } from 'path'
import { ensureDir, readJSON, writeFileSync, emptyDir } from 'fs-extra'
import { red, yellow } from 'chalk'
import inquirer from 'inquirer'

async function generateIcon() {
  const dir = resolve(process.cwd(), 'node_modules/@iconify/json')
  // 读取Json文件，并转成object
  const raw = await readJSON(join(dir, 'collections.json'))

  const collections = Object.entries(raw).map(([id, v]) => ({
    ...(v as any),
    id,
  }))

  const choices = collections.map((item) => ({
    key: item.id,
    value: item.id,
    name: item.name,
  }))

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'useType',
        choices: [
          { key: 'local', value: 'local', name: '本地' },
          { key: 'onLine', value: 'onLine', name: '线上' },
        ],
        message: '如何生成图标?',
      },
      {
        type: 'list',
        name: 'iconSet',
        choices: choices,
        message: '选择需要生成的图标集',
        default: 'ant-design',
      },
      {
        type: 'input',
        name: 'output',
        message: '选择图标输出的目录，可以直接回车选择默认',
        default: 'src/components/Icon/data',
      },
    ])
    .then(async (answers) => {
      const { iconSet, output, useType } = answers
      const outputDir = resolve(process.cwd(), output)
      // 确保文件夹存在，如果不存在则会创建同名文件
      ensureDir(outputDir)
      const genCollections = collections.filter((item) =>
        [iconSet].includes(item.id),
      )
      const prefixSet: string[] = []
      for (const info of genCollections) {
        const data = await readJSON(join(dir, 'json', `${info.id}.json`))
        if (data) {
          const { prefix } = data
          const isLocal = useType === 'local'
          const icons = Object.keys(data.icons).map(
            (item) => `${isLocal ? prefix + ':' : ''}${item}`,
          )
          // 异步写入文件
          await writeFileSync(
            join(output, `icons.data.ts`),
            `export default ${
              isLocal
                ? JSON.stringify(icons)
                : JSON.stringify({ prefix, icons })
            }`,
          )
          prefixSet.push(prefix)
        }
      }
      emptyDir(join(process.cwd(), 'node_modules/.vite'))
      console.log(
        `✨ ${red(['vue-admin'])}` +
          ' - 图标生成成功:' +
          `[${prefixSet}]`,
      )
      console.log(
        `✨ ${yellow(['iconify图标网站'])}` +
          ' - https://icon-sets.iconify.design',
      )
    })
}

generateIcon()
