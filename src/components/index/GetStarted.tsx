import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../../styles/variables'
import { projects } from '../../contents/projects'
import Project from './Project'
import Difference from '../gitpod-vs-codespaces/Difference'

const StyledGetStarted = styled.div`
  /* ------------------------------------------- */
  /* ----- Section Get Started ----- */
  /* ------------------------------------------- */

  .get-started {
    &__projects {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      @media (max-width: ${sizes.breakpoints.lg}) {
        overflow-x: scroll;
        justify-content: space-between;
        flex-wrap: nowrap;
      }

      & > .project {
        margin-bottom: 5rem;
          margin-right: 5rem;

        @media (min-width: ${sizes.breakpoints.md}) {
          width: 19rem;
        }
      }
    }
  }
`

const GetStarted = () => (
    <section style={{padding: '0'}}>
        <Difference 
            spacing="small"
            title="Get Started"
        />
        <section 
            className="get-started" 
            id="get-started" 
            style={{padding: '8rem 0'}}
        >
            <StyledGetStarted className="row">
                <h3 style={{textAlign: 'center', fontWeight: 400}}>Don’t want to open your own repo? Choose an example.</h3>
                <div className="get-started__projects">
                    {projects.map((project, i) => (
                        <Project
                            key={i}
                            image={<object role="presentation" tabIndex={-1} data={project.image} />}
                            title={project.title}
                            githubUrl={project.githubUrl}
                            gitlabUrl={project.gitlabUrl}
                            bitbucketUrl={project.bitbucketUrl}
                        />
                    ))}
                </div>
            </StyledGetStarted>
        </section>
    </section>
)

export default GetStarted
