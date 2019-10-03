import { schedule } from 'danger'

import conventionalCommits from './config/_ci/danger/conventionalCommit'

schedule(conventionalCommits)
