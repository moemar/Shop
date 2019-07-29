export const GA_TRACKING_ID = "UA-144758358-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/enhanced-ecommerce
export const view_item_list = () => {
  window.gtag("event", "view_item_list", {
    items: [
      {
        id: "P12345",
        name: "Android Warhol T-Shirt",
        list_name: "Search Results",
        brand: "Google",
        category: "Apparel/T-Shirts",
        variant: "Black",
        list_position: 1,
        quantity: 2,
        price: 2
      },
      {
        id: "P67890",
        name: "Flame challenge TShirt",
        list_name: "Search Results",
        brand: "MyBrand",
        category: "Apparel/T-Shirts",
        variant: "Red",
        list_position: 2,
        quantity: 1,
        price: 3
      }
    ]
  });
}

export const select_content = () => {
  window.gtag("event", "select_content", {
    content_type: "product",
    items: [
      {
        id: "P12345",
        name: "Android Warhol T-Shirt",
        list_name: "Search Results",
        brand: "Google",
        category: "Apparel/T-Shirts",
        variant: "Black",
        list_position: 1,
        quantity: 2,
        price: 2
      }
    ]
  });
};

export const add_to_cart = () => {
  window.gtag("event", "add_to_cart", {
    items: [
      {
        id: "P12345",
        name: "Android Warhol T-Shirt",
        list_name: "Search Results",
        brand: "Google",
        category: "Apparel/T-Shirts",
        variant: "Black",
        list_position: 1,
        quantity: 2,
        price: "2.0"
      }
    ],
    event_callback: function(e) {
      console.log('Callback', e);
    }
  });
};
