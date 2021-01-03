import { mount } from '@vue/test-utils'
import AdsSearch from '@/components/AdsSearch.vue'

describe('AdsSearch.vue', () => {
  it('sets props.searchInput when passed', async () => {
    const searchInputValue = 'some search input'
    const wrapper = mount(AdsSearch)
    const searchInput = wrapper.find('#searchInput')
    await searchInput.setValue(searchInputValue)
    const formElement = searchInput.element as HTMLInputElement
    expect(formElement.value).toEqual(searchInputValue)
  })

  it('emits event', async () => {
    const searchInputValue = 'some search input'
    const wrapper = mount(AdsSearch)
    wrapper.vm.$emit('on-search', searchInputValue)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('on-search')[0]).toEqual([searchInputValue])
  })
})
