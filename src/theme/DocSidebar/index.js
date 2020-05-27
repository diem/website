import React, {useState, useCallback} from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useLogo from '@theme/hooks/useLogo';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';

import WithBackgroundImage from 'components/WithBackgroundImage';

import classnames from 'classnames';
import styles from './styles.module.css';

const MOBILE_TOGGLE_SIZE = 24;

const getClasses = (classNames = []) =>
  classNames.map(c =>
    typeof c === 'object' && c.global
      ? c.name
      : styles[c]
  );

function DocSidebarItem({theme = 'primary', item, onItemClick, collapsible, ...props}) {
  const {extra = {}, items, href, label, type} = item;
  const {classNames, icon, iconDark, theme: itemTheme = theme} = extra;
  const [collapsed, setCollapsed] = useState(item.collapsed);
  const [prevCollapsedProp, setPreviousCollapsedProp] = useState(null);

  // If the collapsing state from props changed, probably a navigation event
  // occurred. Overwrite the component's collapsed state with the props'
  // collapsed value.
  if (item.collapsed !== prevCollapsedProp) {
    setPreviousCollapsedProp(item.collapsed);
    setCollapsed(item.collapsed);
  }

  const handleItemClick = useCallback((e) => {
    e.preventDefault();
    e.target.blur();
    setCollapsed((state) => !state);
  });

  switch (type) {
    case 'category':
      return (
        items.length > 0 && (
          <WithBackgroundImage
            className={classnames(
              'menu__list-item', 
              styles.listItem, 
              styles.category,
              {
                'menu__list-item--collapsed': collapsed,
                [styles.withBackgroundImage]: icon,
              },
            )}
            key={label}
            tag="li"
            imageDark={iconDark}
            imageLight={icon}
          >
            <ul className={classnames("menu__list", styles[itemTheme])}>
              <li className={styles.categoryTitle}>
                <a
                  className={classnames(
                    "menu__link", 
                    styles.menuLink, 
                    styles[itemTheme],
                    ...getClasses(classNames),
                    {
                      'menu__link--sublist': collapsible,
                      'menu__link--active': collapsible && !item.collapsed,
                    },
                  )}
                  onClick={collapsible ? handleItemClick : undefined}
                  {...props}
                >
                  {label}
                </a>
              </li>
              {items.map((childItem) => (
                <DocSidebarItem
                  tabIndex={collapsed ? '-1' : '0'}
                  key={childItem.label}
                  item={childItem}
                  onItemClick={onItemClick}
                  collapsible={collapsible}
                  theme={itemTheme}
                />
              ))}
            </ul>
          </WithBackgroundImage>
        )
      );

    case 'link':
    default:
      return (
        <li 
          className={classnames(
            "menu__list-item", 
            styles.listItem,
            styles[itemTheme],
            ...getClasses(classNames),
          )} 
          key={label}
        >
          <WithBackgroundImage
            className={classnames("menu__link", styles.menuLink, {
              [styles.withBackgroundImage]: icon,
            })}
            imageDark={iconDark}
            imageLight={icon}
            tag={Link}
            to={href}
            {...(isInternalUrl(href)
              ? {
                  isNavLink: true,
                  activeClassName: styles.active,
                  exact: true,
                  onClick: onItemClick,
                }
              : {
                  target: '_blank',
                  rel: 'noreferrer noopener',
                })}
            {...props}
          >
            <span>{label}</span>
          </WithBackgroundImage>
        </li>
      );
  }
}

// Calculate the category collapsing state when a page navigation occurs.
// We want to automatically expand the categories which contains the current page.
function mutateSidebarCollapsingState(item, path) {
  const {items, href, type} = item;
  switch (type) {
    case 'category': {
      const anyChildItemsActive =
        items
          .map((childItem) => mutateSidebarCollapsingState(childItem, path))
          .filter((val) => val).length > 0;
      // eslint-disable-next-line no-param-reassign
      item.collapsed = !anyChildItemsActive;
      return anyChildItemsActive;
    }

    case 'link':
    default:
      return href === path;
  }
}

function DocSidebar(props) {
  const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false);
  const {
    siteConfig: {
      themeConfig: {navbar: {title, hideOnScroll = false} = {}},
    } = {},
    isClient,
  } = useDocusaurusContext();
  const {logoLink, logoLinkProps, logoImageUrl, logoAlt} = useLogo();

  const {
    docsSidebars,
    path,
    sidebar: currentSidebar,
    sidebarCollapsible,
  } = props;

  useLockBodyScroll(showResponsiveSidebar);

  if (!currentSidebar) {
    return null;
  }

  const sidebarData = docsSidebars[currentSidebar];

  if (!sidebarData) {
    throw new Error(
      `Cannot find the sidebar "${currentSidebar}" in the sidebar config!`,
    );
  }

  if (sidebarCollapsible) {
    sidebarData.forEach((sidebarItem) =>
      mutateSidebarCollapsingState(sidebarItem, path),
    );
  }

  return (
    <nav aria-label="intra-site navigation" className={styles.sidebar}>
      {hideOnScroll && (
        <Link
          tabIndex="-1"
          className={classnames(styles.sidebarLogo, styles.backgroundImage)}
          to={logoLink}
          {...logoLinkProps}>
          {logoImageUrl != null && (
            <img aria-hidden key={isClient} src={logoImageUrl} alt={logoAlt} />
          )}
          {title != null && <strong>{title}</strong>}
        </Link>
      )}
      <div
        className={classnames('menu', 'menu--responsive', styles.menu, {
          'menu--show': showResponsiveSidebar,
        })}>
        <button
          aria-label={showResponsiveSidebar ? 'Close Menu' : 'Open Menu'}
          aria-haspopup="true"
          className="button button--secondary button--sm menu__button"
          type="button"
          onClick={() => {
            setShowResponsiveSidebar(!showResponsiveSidebar);
          }}>
          {showResponsiveSidebar ? (
            <span
              className={classnames(
                styles.sidebarMenuIcon,
                styles.sidebarMenuCloseIcon,
              )}>
              &times;
            </span>
          ) : (
            <svg
              aria-label="Menu"
              className={styles.sidebarMenuIcon}
              xmlns="http://www.w3.org/2000/svg"
              height={MOBILE_TOGGLE_SIZE}
              width={MOBILE_TOGGLE_SIZE}
              viewBox="0 0 32 32"
              role="img"
              focusable="false">
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          )}
        </button>
        <ul className={classnames("menu__list", styles.menuList)}>
          {sidebarData.map((item) => (
            <DocSidebarItem
              key={item.label}
              item={item}
              onItemClick={(e) => {
                e.target.blur();
                setShowResponsiveSidebar(false);
              }}
              collapsible={sidebarCollapsible}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default DocSidebar;
