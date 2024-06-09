module.exports = () => ({
    "models-relation-diagram": {
        enabled: true,
        config: {
          defaultExcludeAdmin: true, // hide admin:: + strapi:: + webhook + plugin::i18n.locale + plugin::content-releases
          defaultHideUpload: true, // hide plugin::upload.file + plugin::upload.folder
          defaultExcludeComponents: true, // hide components
          defaultLayout: 'dagre', // default layout: ELK,Dagre
          defaultEdgesType: 'step', // default edge type: straight,step,smoothstep,bezier
          hideMarkers: false, // hide relation marker on edges 
        }
      },
    "entity-relationship-chart": {
      enabled: true,
      config: {
        // By default all contentTypes and components are included.
        // To exlclude strapi's internal models, use:
        exclude: [
          "strapi::core-store",
          "webhook",
          "admin::permission",
          "admin::api-token",
          "plugin::upload.file",
          "plugin::i18n.locale",
          "plugin::users-permissions.permission",
          "plugin::users-permissions.role",
        ],
      },
    },
});
