import { schedule } from 'danger'

import conventionalCommits from './config/_ci/danger/plugins/conventional-commit'
import conventionalEmptyAssignee from './config/_ci/danger/plugins/empty-assignee'
import conventionalEmptyLabel from './config/_ci/danger/plugins/empty-labels'
import conventionalPRTitle from './config/_ci/danger/plugins/conventional-pr-title'

schedule(conventionalCommits)
schedule(conventionalPRTitle)
schedule(conventionalEmptyLabel)
schedule(conventionalEmptyAssignee)
