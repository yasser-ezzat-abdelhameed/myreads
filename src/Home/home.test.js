import React from 'react'
import { shallow } from 'enzyme'
import checkPropTypes from 'check-prop-types'
import Home from './index'

const setup = (props={}) => shallow(<Home {...props} />)

describe('Home component', () => {
  const expectedProps = {
    books: [],
    handleChange: () => {}
  }
  const component = setup(expectedProps)

  describe("Checking proptypes", () => {
    it("Should not throw a warning", () => {
      const propsErr = checkPropTypes(Home.propTypes, expectedProps, 'props', Home.name)
      expect(propsErr).toBeUndefined()
    })
  })

  it('Should render without errors', () => {
    const wrapper = component.find(`[data-test="home-component"]`)
    expect(wrapper.length).toBe(1)
  })

  it('Should have a link to search', () => {
    const search = component.find(`[data-test="search-link"]`)
    expect(search.length).toBe(1)
  })
  
  it("Should have three book shelves", () => {
    const shelves = component.find(`[data-test="book-shelf"]`)
    expect(shelves.length).toBe(3)
  })
})
