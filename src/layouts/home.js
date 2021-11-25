import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPageUrl, Link, withPrefix } from '../utils';

export default class Home extends React.Component {
    renderPost(post, index, hasMoreLink, moreLinkText) {
        const title = _.get(post, 'title');
        const thumbImage = _.get(post, 'thumb_img_path');
        const thumbImageAlt = _.get(post, 'thumb_img_alt', '');
        const excerpt = _.get(post, 'excerpt');
        const date = Date(_.get(post, 'date'));
        const markdownContent = _.get(post, 'markdown_content');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');

        // const dayInMonth = date.getDay();        
        // const month = moment(date).strftime('%m');
        const postUrl = getPageUrl(post, { withPrefix: true });

        return (
            
        <article key={index} className="">
           <div class="card">{date}
            <div class="card-header no-border">
                <h5 class="card-title">{title}</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">{dayInMonth}</span>
                            <span class="widget-49-date-month">Tháng {month}</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                        <p class="widget-49-meeting-item"><span>{markdownContent}</span></p>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div></div>
            {/* <header className="post-header">
                <h2 className="post-title">
                    <Link href={postUrl}>{title}</Link>
                </h2>
                <div className="post-meta">
                    Published on <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                </div>
            </header>
            {thumbImage && (
                <Link className="post-thumbnail" href={postUrl}>
                    <img className="thumbnail" src={withPrefix(thumbImage)} alt={thumbImageAlt} />
                </Link>
            )}
            {excerpt && (
                <div className="post-content">
                    <p>{excerpt}</p>
                </div>
            )}
            {hasMoreLink && moreLinkText && (
                <p className="read-more">
                    <Link className="read-more-link" href={postUrl}>{moreLinkText} <span className="icon-arrow-right" aria-hidden="true" /></Link>
                </p>
            )} */}
        </article>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const header = _.get(config, 'header');
        const headerImage = _.get(header, 'background_img');
        const page = _.get(this.props, 'page');
        const hasMoreLink = _.get(page, 'has_more_link');
        const moreLinkText = _.get(page, 'more_link_text');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <Header config={config} page={page} image={headerImage} />
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        <div className="post-feed">
                            {_.map(posts, (post, index) => this.renderPost(post, index, hasMoreLink, moreLinkText))}
                        </div>
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
