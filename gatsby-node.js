const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const noteTemplate = path.resolve(`src/layouts/note.js`);
  const result = await graphql(`
    query queryCMSPage {
      allDatoCmsNote {
        nodes {
          originalId
          pageType
        }
      }
    }
  `);

  result.data.allDatoCmsNote.nodes.forEach(({ originalId, pageType }) => {
    createPage({
      path: `${pageType}/details/${originalId}`,
      component: noteTemplate,
      context: {
        id: originalId,
        pageType,
      },
    });
  });
};
