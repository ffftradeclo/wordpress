/** @jsx jsx */
import { useState, useEffect } from 'react'
import Downshift from 'downshift'
import { Styled, jsx } from 'theme-ui'

import { ButtonIcon, ButtonIconSimple } from '../ButtonIcon'

export const SearchBar = ({ filterData, onSearch }) => {
  const [selectedItems, setSelectedItems] = useState([])

  const removeItem = selectedItem => {
    const arr = selectedItems.filter(
      ({ value }) => value !== selectedItem.value
    )
    setSelectedItems(arr)
  }
  const handleCahange = selectedItem => {
    if (selectedItems.some(({ value }) => value === selectedItem.value)) {
      removeItem(selectedItem)
    } else {
      setSelectedItems([...selectedItems, selectedItem])
    }
  }

  useEffect(() => {
    onSearch(selectedItems)
  }, [selectedItems])

  return (
    <div>
      <Downshift
        id="search"
        stateReducer={stateReducer}
        onChange={handleCahange}
        selectedItem={null}
        itemToString={item => (item ? item : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          toggleMenu,
          inputValue,
          clearSelection,
          selectedItem,
          highlightedIndex,
          getRootProps,
          abc
        }) => (
          <div>
            <Styled.div
              aria-label={'search'}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row'
              }}
            >
              {selectedItems.length > 0
                ? selectedItems.map(item => (
                    <Styled.div
                      key={item.value}
                      sx={{
                        display: 'flex',
                        ml: 2,
                        mb: 1
                      }}
                    >
                      <Styled.div sx={{ variant: 'searchMdxWp.tags' }}>
                        <span>{item.value}</span>
                        <ButtonIconSimple
                          onClick={() => removeItem(item)}
                          aria-label="clear selection"
                          iconPath="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        />
                      </Styled.div>
                    </Styled.div>
                  ))
                : ''}
            </Styled.div>

            <div style={{ position: 'relative' }}>
              <div
                aria-labelledby=""
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
                {...getRootProps({}, { suppressRefError: true })}
              >
                <input
                  aria-label={'search'}
                  aria-labelledby=""
                  sx={{ variant: 'searchMdxWp.input' }}
                  {...getInputProps({
                    placeholder: 'Search Tags',
                    onClick: () => toggleMenu()
                  })}
                />

                {selectedItem ? (
                  <ButtonIcon
                    onClick={clearSelection}
                    aria-label="clear selection"
                    iconPath="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                ) : (
                  <ButtonIcon
                    {...getToggleButtonProps()}
                    iconPath={
                      isOpen
                        ? 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'
                        : 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'
                    }
                  />
                )}
              </div>

              <Styled.div
                id="divWrapper"
                sx={{
                  variant: 'searchMdxWp.divWrapper'
                }}
              >
                <Styled.div>
                  <ul
                    {...getMenuProps()}
                    aria-label="list"
                    aria-labelledby=""
                    sx={{
                      variant: 'searchMdxWp.ul',
                      maxHeight: isOpen ? '310px' : '0px'
                    }}
                  >
                    {isOpen
                      ? filterData
                          .filter(
                            item =>
                              !inputValue || item.value.includes(inputValue)
                          )
                          .map((item, index) => (
                            <Styled.li
                              {...getItemProps({
                                key: item.value,
                                index,
                                item
                              })}
                              sx={{
                                variant: 'searchMdxWp.li',
                                color:
                                  highlightedIndex === index ||
                                  selectedItems.some(
                                    ({ value: itemSel }) =>
                                      itemSel === item.value
                                  )
                                    ? 'text'
                                    : 'textMuted'
                              }}
                            >
                              {item.value}
                            </Styled.li>
                          ))
                      : null}
                  </ul>
                </Styled.div>
              </Styled.div>
            </div>
          </div>
        )}
      </Downshift>
    </div>
  )
}

const stateReducer = (state, changes) => {
  if (changes && typeof changes.inputValue === 'string') {
    changes.inputValue = changes.inputValue.toLowerCase()
  }
  switch (changes.type) {
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      return {
        ...changes,
        highlightedIndex: state.highlightedIndex,
        isOpen: true,
        inputValue: ''
      }
    default:
      return changes
  }
}
