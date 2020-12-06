/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [

    // Actor Sheet Partials
    "systems/wicked-ones/templates/parts/gold.html",
    "systems/wicked-ones/templates/parts/attributes.html",
    "systems/wicked-ones/templates/parts/turf-list.html",
    "systems/wicked-ones/templates/parts/cohort-block.html"
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
