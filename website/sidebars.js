/**
 * @file
 */

module.exports = {
    guide: [
        'quick-start',
        {
          type: 'category',
          label: '指南',
          link: {
            type: 'generated-index',
          },
          items: [
            "guid/add-route",
            "guid/dynamic-route-matching",
            "guid/nested-routes",
            "guid/lazy-loading-routes",
            "guid/programmatic-navigation",
            "guid/navigation-guards"
          ],
        },
        'api'
    ],
}
