import React from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'
import { Badge } from 'reactstrap'
import {
  Row,
  Button,
  Col,
  Icon
} from 'atoms'
import {
  FieldContainer,
  CollectionEditorButton
} from 'molecules'

const RepoControls = (props) => {
  const { branch, changeBranch, isCommitable, asyncLoadModel, stagedFiles, match, branchList, reloadReposAndBranches, baseRoute, ...rest } = props
  const { type, repo } = match.params
  return (
    <Row className='space-between file-tree-navigation'>
      <Col sm={12}>
        <h2>{repo}</h2>
      </Col>
      <Col md={7} sm={12}>
        <div className='flex-row align-center'>
          <div className='mr-2 bold'>
            <Icon iconName='code-branch' />
            Branch:
          </div>
          <FieldContainer
            horizontal
            disabled={stagedFiles.length > 0}
            clearable={false}
            type={'select'}
            value={{ name: branch }}
            valueKey='name'
            labelKey='name'
            options={branchList}
            onChange={changeBranch}
          />
        </div>
      </Col>
      <Col md={5} sm={12}>
        <div className='justify-content-end flex align-items-center btn-group w-100'>
          {
            type !== 'collections' && stagedFiles.length > 0 &&
              <Button
                href={`/${baseRoute}/commit/?${qs.stringify(rest['queryParams'])}`}
                className='btn-sm'
                color='primary'
                style={{ marginRight: '10px' }}
                disabled={!isCommitable}
              >
                Commit Changes <Badge color='danger'>{stagedFiles.length}</Badge>
              </Button>
          }
          {
            type !== 'users' && <CollectionEditorButton {...props} />
          }
          <div className='ml-2'>
            <Icon iconName='sync-alt' size='sm' onClick={reloadReposAndBranches} />
          </div>
        </div>
      </Col>

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
