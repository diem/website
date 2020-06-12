import React from 'react';

import DocPaginator from '@theme/DocPaginator';
import Head from '@docusaurus/Head';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';

import {RightSidebar} from 'libra-docusaurus';
import ArrowLeft from 'img/shared/arrow-left.svg';
import ArrowRight from 'img/shared/arrow-right.svg';

import classnames from 'classnames';
import styles from './styles.module.css';

const Pagination = ({metadata}) => {
  const previousLink = metadata;

  return (
    <div className={styles.pagination}>
      <a 
        className={classnames(styles.previous, {
          [styles['disabled']]: !metadata.previous,
        })} 
        href={metadata.previous && metadata.previous.permalink}
      >
        <ArrowLeft />
        <span>Previous</span>
      </a>
      <a 
        className={classnames(styles.next, {
          [styles['disabled']]: !metadata.next,
        })} 
        href={metadata.next && metadata.next.permalink}
      >
        <span>Next</span>
        <ArrowRight />
      </a>
    </div>
  );
};

function DocItem(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {url: siteUrl, title: siteTitle} = siteConfig;
  const {content: DocContent} = props;
  const {metadata} = DocContent;
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    version,
  } = metadata;
  const {
    frontMatter: {
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
  } = DocContent;

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  let metaImageUrl = siteUrl + useBaseUrl(metaImage);
  if (!isInternalUrl(metaImage)) {
    metaImageUrl = metaImage;
  }

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
      </Head>
      <div
        className={classnames(
          'container',
          styles.docItemWrapper,
        )}>
          <div className={classnames(styles.docItemCol)}>
            <div className={styles.docItemContainer}>
              <article>
                {version && (
                  <div>
                    <span className="badge badge--secondary">
                      Version: {version}
                    </span>
                  </div>
                )}
                {!hideTitle && (
                  <header>
                    <h1 className={styles.docTitle}>{title}</h1>
                  </header>
                )}
                <div className="markdown">
                  <DocContent />
                </div>
              </article>
              <Pagination metadata={metadata} />
            </div>
          </div>
        <RightSidebar
          editUrl={editUrl}
          headings={DocContent.rightToc} 
        />
      </div>
    </>
  );
}

export default DocItem;
