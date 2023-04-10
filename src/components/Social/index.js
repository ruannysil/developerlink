import { SocialLink } from './styles';

export default function Social({ children, url }) {
  return (
    <SocialLink href={url} rel="noopener noreferrer" target="_blank">
      {children}
    </SocialLink>
  );
}
