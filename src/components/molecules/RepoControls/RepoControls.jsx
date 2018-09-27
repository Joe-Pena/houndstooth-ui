import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Button,
  Col
  // BackButton
} from 'atoms'
import { FieldContainer } from 'molecules'

const RepoControls = (props) => {
  const { branch, changeBranch, isCommitable, asyncLoadModel, stagedFiles, match } = props
  const { type } = match.params
  console.log('REPO NAV props', props)
  return (
    <Row className='space-between file-tree-navigation'>
      {/* <BackButton> back </BackButton> */}
      <Col>
        <FieldContainer
          async
          horizontal
          disabled={stagedFiles.length > 0}
          clearable={false}
          type={'select'}
          label={'Select a Branch'}
          value={branch}
          valueKey='name'
          labelKey='name'
          loadOptions={(search) => asyncLoadModel('branches', search)}
          onChange={changeBranch}
        />
      </Col>
      {
        type !== 'collections' &&
          <Col className='justify-content-end'>
            <Button href={'commit'} disabled={!isCommitable}>Commit Changes</Button>
          </Col>
      }
    </Row>
  )
}

RepoControls.propTypes = {
  branch: PropTypes.string,
  changeBranch: PropTypes.func,
  isCollectionable: PropTypes.bool,
  isCommitable: PropTypes.bool
}

export default RepoControls