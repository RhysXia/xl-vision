// import classnames from 'classnames'
import * as React from 'react'
import classes from './index.module.scss'
import { DemoBoxProps } from '@xl-vision/scripts'
import { CollapseTransition, Button } from '../../../src'
import { CodeSlash, Code, Link } from '../../../src/icon'
import getText from '../../utils/getText'

import 'prismjs/themes/prism.css'

const DemoBox: React.FunctionComponent<DemoBoxProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, desc, blocks, children } = props

  const [expand, setExpand] = React.useState(false)

  const onClick = React.useCallback(() => {
    setExpand((prev) => !prev)
  }, [])

  const text = getText(title)
  return (
    <div className={classes.demoBox} id={text}>
      <div className={classes.preview}>{children}</div>
      <div className={classes.info}>
        <div className={classes.title}>
          {title}
          <a className={classes.anchor} href={`#${text}`}>
            <Link />
          </a>
        </div>
        <div className={classes.desc}>{desc}</div>
      </div>
      <div className={classes.actions}>
        <Button
          onClick={onClick}
          variant='text'
          theme='primary'
          prefixIcon={expand ? <CodeSlash /> : <Code />}
        />
      </div>
      <CollapseTransition in={expand} mountOnEnter={true}>
        <div className={classes.codes}>
          {
            // eslint-disable-next-line react/prop-types
            blocks.map((it, index) => {
              return (
                <div className={classes.codeWrapper} key={index}>
                  <ul className={classes.lines}>
                    {it.content.split('\n').map((_, index) => {
                      return (
                        <li key={index} className={classes.line}>
                          {index + 1}
                        </li>
                      )
                    })}
                  </ul>
                  <div className={classes.lang}>{it.lang}</div>
                  <div className={classes.code}>{it.preview}</div>
                </div>
              )
            })
          }
        </div>
      </CollapseTransition>
    </div>
  )
}

export default DemoBox
