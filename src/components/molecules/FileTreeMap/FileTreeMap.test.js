/* eslint-env mocha */
/* global expect */
import React from 'react'
import { shallowWrap } from 'helpers/contextWrap'

// import ReactDOM from 'react-dom';

import FileTreeMapContainer from './FileTreeMapContainer'
import FileTreeMap from './FileTreeMap'

describe('File Tree Mapping', () => {
  const getWrapper = (props, routerProps) => shallowWrap(<FileTreeMapContainer {...props} />, routerProps)

  it('renders without crashing', () => {
    const routerProps = {
      match: {
        params: {
          type: 'file',
          path: 'file1/subfile1'
        }
      }
    }

    const props = {
      queryParams: { path: 'something/here' },
      tree: {
        file1: '',
        file2: '',
        file3: {
          subfile1: '',
          subfile2: '',
          subfile3: ''
        }
      },
      baseRoute: '/baseRoute/something',
      branch: 'master'
    }

    const wrapper = getWrapper(props, routerProps).until(FileTreeMap)

    expect(wrapper.find(FileTreeMap).length).toBe(1)
  })

  // it('expect the correct amount of directories to be shown', () => {
  //   const routerProps = {
  //     match: {
  //       params: {
  //         type: 'file',
  //         path: 'file1/subfile1'
  //       }
  //     }
  //   }

  //   const props = {
  //     queryParams: { path: 'file1/subfile1' },
  //     tree: {
  //       file1: '',
  //       file2: '',
  //       file3: {
  //         subfile1: '',
  //         subfile2: '',
  //         subfile3: ''
  //       }
  //     },
  //     baseApiRoute: '/tbrandle/repo/',
  //     branch: 'master'
  //   }

  //   const wrapper = getWrapper(props, routerProps).until(FileTreeMap)

  //   expect(wrapper.find('.nested-dir').length).toBe(2)
  //   expect(wrapper.find('.dir-list-file-tree').length).toBe(1)
  // })
})
