// import classnames from 'classnames'
import * as React from 'react'
import classes from './index.module.scss'
import { DemoBoxProps } from '@xl-vision/scripts'
import { CollapseTransition } from '../../../src'

const DemoBox: React.FunctionComponent<DemoBoxProps> = (props) => {
  const { title, desc, blocks, children } = props

  const [expand, setExpand] = React.useState(false)

  const onClick = React.useCallback(() => {
    setExpand((prev) => !prev)
  }, [])

  return (
    <div className={classes.demoBox}>
      <div className={classes.preview}>{children}</div>
      <div className={classes.info}>
        <div className={classes.title}>{title}</div>
        <div className={classes.desc}>{desc}</div>
        <div className={classes.actions}>
          <button onClick={onClick}>{expand ? '收起' : '展开'}</button>
        </div>
      </div>
      <CollapseTransition show={expand}>
        <div className={classes.codes}>
          {blocks.map((it, index) => {
            return (
              <div className={classes.codeWrapper} key={index}>
                <div className={classes.lang}>{it.lang}</div>
                <div className={classes.code}>{it.preview}</div>
              </div>
            )
          })}
        </div>
      </CollapseTransition>
    </div>
  )
}

export default DemoBox
