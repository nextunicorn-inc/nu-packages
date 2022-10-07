import { IconBookmarkSelected, IconBookmarkDeselected } from '@nextunicorn/icons';
import * as Styled from './Card.styled';
import CardProps from './Card.types';

const Card = ({
  title,
  description,
  tags,
  viewCount,
  isInvest = false,
  isBookmarked = false,
  ...rest
}: CardProps) => {
  return (
    <Styled.CardWrapper {...rest}>
      <Styled.ProfileImage>
        <Styled.ProfileThumbnail />
      </Styled.ProfileImage>
      <Styled.Contents>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Styled.TagArea>
          {tags.map(({ name, link }) => (
            <a href={link} key={name}>
              {name}
            </a>
          ))}
        </Styled.TagArea>
        <Styled.InformationArea>
          <Styled.ViewCount>조회수 {viewCount.toLocaleString()}</Styled.ViewCount>
          {isInvest && <Styled.Investor>관심있음</Styled.Investor>}
          <Styled.BookmarkArea>
            {isBookmarked ? <IconBookmarkSelected /> : <IconBookmarkDeselected />}
          </Styled.BookmarkArea>
        </Styled.InformationArea>
      </Styled.Contents>
    </Styled.CardWrapper>
  );
};

export default Card;
