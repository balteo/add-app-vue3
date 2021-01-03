import AdsList from '@/components/AdsList.vue'
import { mount } from '@vue/test-utils'

describe('AdsList.vue', () => {
  let component: any
  const ad = {
    id: 1,
    title: 'An ad title',
    description: 'An ad description'
  }

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([ad])
    }))
  })

  beforeEach(() => {
    component = mount(AdsList)
  })

  it('contains an ad', () => {
    expect(component.vm.state.ads).toEqual([ad])
  })
})
