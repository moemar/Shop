import React, { Component } from "react";
import Head from 'next/head'

import * as gtag from "../lib/gtag";

export default class extends Component {
  begin_checkout = e => {
    e.preventDefault()
    gtag.event({
      action: "begin_checkout",
      category: "ecommerce",
      label: ""
    });
  }

  view_item_list = e => {
    e.preventDefault()
    gtag.view_item_list();
  }

  select_content = e => {
    e.preventDefault()
    gtag.select_content();
  }

  add_to_cart = e => {
    e.preventDefault()
    gtag.add_to_cart();
  }

  render () {
    return (
      <div>
        <Head>
          <meta name="description" content="Meta description" />
          <title>Google Analytics Events</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <div>
          <h1>Google Analytics Events</h1>
          <p>
            https://developers.google.com/analytics/devguides/collection/gtagjs/events
          </p>
          <ul>
            <li>
              <button type="button" onClick={this.begin_checkout}>
                begin_checkout
              </button>
            </li>
            <li>
              <button type="button" onClick={this.view_item_list}>
                view_item_list
              </button>
            </li>
            <li>
              <button type="button" onClick={this.select_content}>
                select_content
              </button>
            </li>
            <li>
              <button type="button" onClick={this.add_to_cart}>
                add_to_cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
