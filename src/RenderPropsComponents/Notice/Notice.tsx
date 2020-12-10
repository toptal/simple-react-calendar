import React, { FC } from 'react'

type Props = {
  blockClassName?: string
}

const displayName = 'Notice'

const Notice: FC<Props> = ({ blockClassName, children }) => {
  if (!children) return null

  return <div className={`${blockClassName}-notice`}>{children}</div>
}

Notice.displayName = displayName

export default Notice
