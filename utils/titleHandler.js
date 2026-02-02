module.exports = {
    ConvertTitleToSlug: function (title) {
        if (!title || typeof title !== 'string') return '';
        // Normalize to separate diacritics, then remove them (works for Vietnamese)
        let result = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        result = result.toLowerCase();
        // remove any character that is not a-z, 0-9, space or hyphen
        result = result.replace(/[^a-z0-9\s-]/g, '');
        // convert spaces to hyphens
        result = result.replace(/\s+/g, '-');
        // collapse multiple hyphens
        result = result.replace(/-+/g, '-');
        // trim leading/trailing hyphens
        result = result.replace(/^-+|-+$/g, '');
        return result;
    }
}
