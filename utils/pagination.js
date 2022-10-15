export {paginate}
const paginate = (projects, page = 1, perPage = 6) => {
    const offset = perPage * (page - 1);
    const totalPages = Math.ceil(projects.length / perPage);
    const paginatedItems = projects.slice(offset, perPage * page);
  
    return {
        previousPage: page - 1 ? page - 1 : null,
        nextPage: (totalPages > page) ? page + 1 : null,
        total: projects.length,
        totalPages: totalPages,
        items: paginatedItems
    };
};