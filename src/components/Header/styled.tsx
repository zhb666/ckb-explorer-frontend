import styled, { css } from 'styled-components'

export const HeaderDiv = styled.div`
  width: 100%;
  min-height: 80px;
  box-shadow: 0 2px 4px 0 #141414;
  background-color: #424242;
  position: fixed;
  position: -webkit-fixed;
  overflow: visible;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1px 8vw;

  @media (max-width: 1440px) {
    padding: 1px 3vw;
  }

  .header__logo {
    display: flex;
    align-items: center;
    .header__logo__img {
      width: 180px;
      height: auto;
    }
  }

  .header__menus {
    display: flex;
    align-items: center;
    padding-left: 20px;
    min-height: 75px;

    .header__menus__item {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 600;
      color: white;
    }
  }

  .header__search {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .header__search__component {
      display: flex;
      align-items: center;
      height: 50px;
      width: 456px;
      min-width: 229px;
    }
  }
`

const HeaderMobileCommonPanel = styled.div`
  height: 42px;
  width: 100vw;
  overflow: hidden;
  box-shadow: 0 2px 4px 0 #141414;
  background-color: #424242;
  position: fixed;
  position: -webkit-fixed;
  overflow: visible;
  top: 0;
  z-index: 10;
  padding: 1px 20px;

  @media (max-width: 400px) {
    padding: 1px 10px;
  }
`

export const HeaderMobilePanel = styled(HeaderMobileCommonPanel)`
  display: ${({ searchBarEditable }: { searchBarEditable: boolean }) => (searchBarEditable ? 'none' : 'block')};
`

export const HeaderSearchMobilePanel = styled(HeaderMobileCommonPanel)`
  display: ${({ searchBarEditable }: { searchBarEditable: boolean }) => (searchBarEditable ? 'block' : 'none')};
`

export const HeaderMobileDiv = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;

  .header__logo {
    height: 16px;
    .header__logo__img {
      width: 80px;
      height: 15px;
      margin-bottom: 3px;
    }

    @media (max-width: 400px) {
      margin-bottom: 4px;
    }
  }

  .header__menus {
    padding-left: 5px;
    display: flex;
    align-items: center;

    .header__menus__item {
      margin-left: 6px;
      font-size: 10px;
      font-weight: bold;
      color: white;

      @media (max-width: 400px) {
        margin-left: 4px;
        font-size: 8px;
      }
    }
  }

  .header__search {
    display: flex;
    align-items: center;
    flex: 1;
    height: 21px;
    justify-content: flex-end;

    .header__search__component {
      width: 29px;
      height: 21px;

      .header__search__image {
        width: 14px;
        height: 14px;
        margin-left: 7.5px;
      }
    }

    .header__search__separate {
      align-items: center;
      height: 14px;
      width: 1px;
      background: white;
      margin: 3px 6px 0 0;
    }
  }
`

export const HeaderBlockchainPanel = styled.div`
  display: flex;
  align-items: center;
  color: ${(props: { showChainDropdown: boolean; theme: any; search: boolean }) =>
    props.showChainDropdown ? 'white' : props.theme.secondary};
  ${(props: { search: boolean }) =>
    !props.search &&
    css`
      flex: 1;
    `}

  .header__blockchain__flag {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2px;
  }

  .header__blockchain__content {
    font-size: 24px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    .header__blockchain__content {
      font-size: 10px;
      letter-spacing: normal;
      margin-top: 3px;
    }
  }
`

export const HeaderSearchPanel = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`

export const HeaderVersionPanel = styled.div`
  width: 90px;
  font-size: 12px;
  margin-right: 70px;
  display: flex;
  cursor: pointer;

  > div {
    margin-top: 8px;
  }

  img {
    margin: 8px 0 0 5px;
    width: 15px;
    height: 9px;
  }

  @media (max-width: 700px) {
    width: 60px;
    font-size: 8px;
    margin-right: 40px;
    > div {
      margin-top: 5px;
    }
    img {
      margin: 5px 0 0 5px;
      width: 10px;
      height: 6px;
    }
  }
`
