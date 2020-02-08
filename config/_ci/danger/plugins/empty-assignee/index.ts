import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL'

declare var danger: DangerDSLType

export declare function fail(message: string): void

const WHITELISTED_USERS = ['dependabot-preview[bot]']
const emptyAssignee = () => {
  if (WHITELISTED_USERS.includes(danger.github.pr.user.login)) {
    return
  }

  if (!danger.github.pr.assignee || danger.github.pr.assignees.length === 0) {
    fail('Please assign someone to this PR before merging.')
  }
}

export default emptyAssignee
