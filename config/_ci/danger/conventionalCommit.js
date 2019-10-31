import lint from '@commitlint/lint'
import load from '@commitlint/load'
import table from 'markdown-table'

const conventionalCommits = async () => {
  const {commits} = danger.git
  const {rules, parserPreset} = await load()

  commits.forEach(async (commit) => {
    const result = await lint(
      commit.message,
      rules,
      parserPreset
        ? {
            parserOpts: parserPreset.parserOpts,
          }
        : {}
    )

    if (!result.valid) {
      if (result.errors.length > 0) {
        let message = `The commit - ${commit.sha.trim()} doesn't conform the conventional commit guidelines. \n\n**Errors**:\n\n`

        message += table([['Message'], ...result.errors.map((error) => [error.message])])

        message += `\n\n💡 For a guidance on how to fix this problem please refer to [https://www.conventionalcommits.org](https://www.conventionalcommits.org)`

        fail(message)
      }
    }
  })
}

export default conventionalCommits
