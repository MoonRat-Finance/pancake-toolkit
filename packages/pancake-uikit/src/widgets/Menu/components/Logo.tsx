import React from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import {MoonRatLogo} from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import {HamburgerIcon, HamburgerCloseIcon} from "../icons";
import MenuButton from "./MenuButton";

interface Props {
    isPushed: boolean;
    isDark: boolean;
    togglePush: () => void;
    href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  
  .desktop-icon {
    width: 156px;
    display: block;
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({isPushed, togglePush, href}) => {
    const isAbsoluteUrl = href.startsWith("http");
    const innerLogo = (
        <>
            <MoonRatLogo className="desktop-icon"/>
        </>
    );

    return (
        <Flex>
            <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
                {isPushed ? (
                    <HamburgerCloseIcon width="24px" color="textSubtle"/>
                ) : (
                    <HamburgerIcon width="24px" color="textSubtle"/>
                )}
            </MenuButton>
            {isAbsoluteUrl ? (
                <StyledLink as="a" href={href} aria-label="Pancake home page">
                    {innerLogo}
                </StyledLink>
            ) : (
                <StyledLink to={href} aria-label="Pancake home page">
                    {innerLogo}
                </StyledLink>
            )}
        </Flex>
    );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
