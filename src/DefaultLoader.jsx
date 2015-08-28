module.exports = {
    loadTemplate (template) {
        return require("./templates/" + template + ".jsx");
    },
    listTemplates(){

        return require.context("./templates", true, /^\.\/.*Template\.js(x)?/).keys().map(function (k) {
            return {
                name: k.replace(/.*\/(.*)\.js(x?)/, '$1'),
                path: k
            }
        });
    },
    loadType (type) {
        return require("./types/" + type + ".jsx");
    },
    listTypes(){
        return require.context("./types", true, /^\.\/.*\.js(x)?/).keys().map(function (k) {
            return {
                name: k.replace(/.*\/(.*)\.js(x?)/, '$1'),
                path: k
            }
        }).filter(function (v) {
            return !/Mixin$/.test(v.name);
        });
    }
}
