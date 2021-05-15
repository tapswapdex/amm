import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://tapswap.money',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swape.tapswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x56eab07247e3e6404ac90140F20bba61375d5C3C',
        target: '_blank',
      },
      {
        label: 'Liquidity',
        href:
          'https://swape.tapswap.money/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x56eab07247e3e6404ac90140F20bba61375d5C3C',
        target: '_blank',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://tapswap.money/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://tapswap.money/#/pools',
  },
  {
    label: 'Smart Faucet',
    icon: 'BushIcon',
    href: 'https://tapswap.money/#/bush',
  },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://tapswap.money/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Token',
        href: 'https://info.apeswap.finance/token/0x56eab07247e3e6404ac90140f20bba61375d5c3c',
        target: '_blank',
      },
      // {
      //   label: 'Contracts',
      //   href: 'https://tapswap.gitbook.io/tapswap/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://tapswap.gitbook.io/tapswap/transparency/transparency',
      //   target: '_blank',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/tapswaptoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/tapswaptoken/',
      // },
      // {
      //   label: 'Dapp.com',
      //   href: 'https://www.dapp.com/app/tapswap-exchange',
      //   target: '_blank',
      // },
      // {
      //   label: 'Dappradar.com',
      //   href: 'https://dappradar.com/binance-smart-chain/defi/tapswap',
      //   target: '_blank',
      // },
      // {
      //   label: 'Bsc.news',
      //   href: 'https://www.bsc.news/bsc-projects',
      //   target: '_blank',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'Audit By Certik',
    icon: 'ShieldIcon',
    href: 'https://tapswap.money',
    // href: 'https://tapswap.money/files/audit_certik.pdf',
    // target: '_blank',
  },
  {
    label: 'Docs',
    icon: 'DocIcon',
    href: 'https://tapswap.money',
    // href: 'https://tapswap.gitbook.io/tapswap/',
    // target: '_blank',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/TapSwapV3',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://tapswapmoneydex.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/tapswap',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/tapswapchat',
        target: '_blank',
      },
    ],
  },
]

export default config
