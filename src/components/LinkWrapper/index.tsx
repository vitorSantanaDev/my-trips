import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wapper>
    <Link href={href}>{children}</Link>
  </S.Wapper>
)

export default LinkWrapper
