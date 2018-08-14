/**
 * mockjs 模拟数据
 */
import Mock from 'mockjs'

const Random = Mock.Random

// 模拟首页-最新文章列表
const newsList = Mock.mock('newsList', getNewsList)

function getNewsList () {
  let lists = []

  for (let i = 0; i < 10; i++) {
    let tmpArr = {
      id: Random.increment(),
      title: Random.ctitle(10, 30), //  Random.csentence( min, max )
      desc: Random.cparagraph(1, 3),
      date: Random.date('yyyy-MM-dd'),
      tags: Random.range(3)
    }
    lists.push(tmpArr)
  }

  return {
    total: 100,
    lists: lists
  }
}

// 模拟首页-热评文章列表
const hotList = Mock.mock('hotList', getHotList)

function getHotList () {
  let lists = []

  for (let i = 0; i < 5; i++) {
    let tmpArr = {
      id: Random.increment(),
      title: Random.ctitle(10, 20)
    }
    lists.push(tmpArr)
  }

  return {
    lists: lists
  }
}

// 模拟首页-标签列表
const tagsList = Mock.mock('tagsList', getTagsList)

function getTagsList () {
  let lists = []

  for (let i = 0; i < 50; i++) {
    let tmpArr = {
      id: Random.increment(),
      text: Random.word(4, 8),
      color: Random.color()
    }
    lists.push(tmpArr)
  }

  return {
    lists: lists
  }
}

export { newsList, hotList, tagsList }
