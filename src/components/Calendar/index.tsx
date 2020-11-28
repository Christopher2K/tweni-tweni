import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { DayFrame } from './DayFrame'
import { desktopStyle } from 'styles/responsive'
import { css, Global } from '@emotion/react'

const Root = styled.div`
  --border-def: 1px solid ${props => props.theme.colors.black};
  width: 100%;
  margin-top: 2rem;
  ${desktopStyle`
    margin-top: 12rem;
    border-right: var(--border-def);
    border-left: var(--border-def);
  `}
`

const CurrentMonth = styled.div`
  --border-def: 1px solid ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 7rem;
  border-top: var(--border-def);
  border-bottom: var(--border-def);

  ${desktopStyle`
    height: 15rem;
  `}

  p {
    padding: 0 ${props => props.theme.nav.padding.sides.mobile};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    font-size: 4rem;
    line-height: 4rem;

    ${props => desktopStyle`
      font-size: 12rem;
    `}
  }
`

const CalendarFrame = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${desktopStyle`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20rem;
  `}
`

interface CalendarProps {
  articles: Model.Article[]
}

export const Calendar: FC<CalendarProps> = ({ articles }) => {
  const [activeDay, setActiveDay] = useState<number>(-1)
  const activeArticle: Model.Article | undefined = articles[activeDay]

  return (
    <Root>
      {activeArticle && (
        <Global
          styles={css`
            :root {
              background-color: ${activeArticle.color};
            }
          `}
        />
      )}
      <CurrentMonth>
        <p>
          <span>Décembre</span>
          <span>2020</span>
        </p>
      </CurrentMonth>
      <CalendarFrame>
        {articles.map((a, index) => (
          <DayFrame
            key={a.title}
            dayNumber={index + 1}
            article={a}
            activeDay={activeDay}
            onDayClicked={setActiveDay}
          />
        ))}
      </CalendarFrame>
    </Root>
  )
}
