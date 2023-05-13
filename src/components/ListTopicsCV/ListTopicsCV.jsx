import { VscClose } from "react-icons/vsc";
import { BsFillMarkdownFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import styled, { useTheme } from "styled-components";

const StyledListTopicsCV = styled.ul`
  width: 100%;
  display: flex;
  align-items: ${(props) => props.alignItemsTab};
  flex-direction: ${(props) => props.flexDirectionTab};
`;

const Tab = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  min-height: ${(props) => props.heightTab};
  background-color: ${(props) => props.backgroundColor};
  border-right: thin solid ${(props) => props.borderColorTab};
  border-bottom: thin solid ${(props) => props.borderColorTab};
`;

const TabName = styled.p`
  /* font-size:  */
  display: flex;
  cursor: pointer;
  margin: 0px 5px;
  color: ${(props) => props.textColor};
`;

const TabIconLeft = styled.div`
  display: flex;
  margin: 0px 0px 0px 5px;
`;

const TabIconRight = styled.div`
  display: flex;
  margin: 0px 5px 0px 0px;
`;

const ListTopicsCV = ({ showBtnClose, heightTab, borderColorTab, alignItemsTab, flexDirectionTab }) => {
  const theme = useTheme();
  const pageLocation = useLocation();

  const tabs = [
    {
      name: "Overview.md",
      path: "/overview",
    },
    {
      name: "Skills.md",
      path: "/skills",
    },
    {
      name: "Experience.md",
      path: "/experience",
    },
    {
      name: "Education.md",
      path: "/education",
    },
    {
      name: "Certificates.md",
      path: "/certificates",
    },
  ];

  return (
    <StyledListTopicsCV
      showBtnClose={showBtnClose}
      alignItemsTab={alignItemsTab}
      flexDirectionTab={flexDirectionTab}
    >
      {tabs.map((tab) => (
        <Link key={tab.path} to={tab.path}>
          <Tab
            heightTab={heightTab}
            borderColorTab={!borderColorTab ? theme.borderColor : borderColorTab}
            backgroundColor={tab.path === pageLocation.pathname ? theme.secondaryColor : ""}
          >
            <TabIconLeft>
              <BsFillMarkdownFill size={15} color={theme.iconSecondaryColor} />
            </TabIconLeft>

            <TabName textColor={theme.textColor}>{tab.name}</TabName>

            {showBtnClose ? (
              <TabIconRight>
                {tab.path === pageLocation.pathname ? (
                  <VscClose
                    size={15}
                    color={theme.iconPrimaryColor}
                    onClick={() => console.log()}
                  />
                ) : (
                  ""
                )}
              </TabIconRight>
            ) : (
              ""
            )}
          </Tab>
        </Link>
      ))}
    </StyledListTopicsCV>
  );
};

export default ListTopicsCV;
