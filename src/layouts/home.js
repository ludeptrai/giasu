import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getPageUrl, Link, withPrefix } from '../utils';
import { htmlToReact, markdownify } from '../utils';

export default class Home extends React.Component {
    renderPost(post, index, hasMoreLink, moreLinkText) {
        const title = _.get(post, 'title').split("|");
        
        const postedBy = _.get(post, 'posted_by');
        const posterUrl = _.get(post, 'poster_url');
        const url = _.get(post, 'url');
        const date = _.get(post, 'date');
        const markdownContent = _.get(post, 'markdown_content');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');

        const dayInMonth = moment(date).strftime('%d');        
        const month = moment(date).strftime('%m');
        const postUrl = getPageUrl(post, { withPrefix: true });
        var text = new String;
        for (const tag in title) {
            text += '<p class="tag">' + title[tag] + '</p>'
        };
        const status = _.get(post, 'status');
        if (status == false) {
            var status_text = 'CHƯA GIAO';
            var status_color = '#82BF56';
        } else {
            var status_text = 'ĐÃ GIAO';
            var status_color = '#E74C3C';
        }
        var status_button = '<a class="action-button" style="border:unset; background-color: '+status_color+'">'+status_text+'</a>'
        var poster = '<a href="'+posterUrl+'" class="widget-49-pro-title"><b>'+postedBy+'</b></a>'
        return (
            
        <article key={index} className="">
           <div class="card">
            {/* <div class="card-header no-border">
            </div> */}
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">{dayInMonth}</span>
                            <span class="widget-49-date-month">Tháng {month}</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            {htmlToReact(poster)}
                            <span class="widget-49-meeting-time">{date}</span>
                            <div>{htmlToReact(text)}</div>
                        </div>
                    </div>
                        <p class="widget-49-meeting-item"><span>{htmlToReact(markdownContent)}</span></p>
                    <div class="widget-49-meeting-action">
                        {htmlToReact(status_button)}
                        <a target="_blank" href={url} class="action-button right">Liên hệ trực tiếp</a>
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
