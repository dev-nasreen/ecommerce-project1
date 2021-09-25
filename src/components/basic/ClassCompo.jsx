import React from 'react'
import './basic.css'
import BlogCard from './BlogCard'

class ClassCompo extends React.Component {
  state = {
    hideBlog: true,
    mObjectArr: [
      {
        id: 1,
        title: 'Blog Title 1',
        description:
          'Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.',
        countLike: 10
      },
      {
        id: 2,
        title: 'Blog Title 2',
        description:
          'Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.',
        countLike: 0
      },
      {
        id: 3,
        title: 'Blog Title 3',
        description:
          'Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.Lorem Ipsum dolor sit.',
        countLike: 0
      }
    ]
  }

  handleCountLike = pos => {
    const updatedBlogList = this.state.mObjectArr
    const updatedObjList = updatedBlogList[pos]
    updatedObjList.countLike = updatedObjList.countLike + 1
    this.setState({ mObjectArr: updatedBlogList })
  }

  onHideShowBtnClick = () => {
    //let updateState = !this.state.hideBlog;
    this.setState((prevState, prevProps) => {
      return { hideBlog: !prevState.hideBlog }
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <button onClick={this.onHideShowBtnClick}>Hide/show</button>

            {this.state.hideBlog
              ? this.state.mObjectArr.map((item, pos) => (
                  <BlogCard
                    item={item}
                    handleCountLike={() => this.handleCountLike(pos)}
                    key={pos}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ClassCompo
