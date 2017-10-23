var mongoose = require("mongoose"),
    Entry = require("./models/entry");

var data = [{
        title: "Stannis aslında kızını yakmadı",
        article: "BUNLAR HEP KAFIR SENARISTLERIN IŞI.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et mattis nisl, in cursus felis. Fusce aturna pulvinar, porta lacus et, interdum velit. Aenean placerat ullamcorper enim, vitae sollicitudin elitaliquet ac. Integer sed dignissim arcu. Donec malesuada sollicitudin tincidunt. Suspendisse congue eratut felis blandit, id aliquam ligula suscipit. Cras eros ipsum, pellentesque sed odio vitae, ullamcorpervestibulum mauris. Quisque cursus, neque non scelerisque consectetur, justo turpis hendrerit neque, sitamet malesuada mauris diam sed elit. Praesent dignissim condimentum nisl, non pretium est bibendum ut.Curabitur pretium eros sed leo sollicitudin, in placerat nisi commodo. Vestibulum a lectus eget orcivehicula molestie et non purus. Mauris risus lacus, facilisis id feugiat egestas, semper vel ex."
    },
    {
        title: "Stannis aslında kızını yakmadı",
        article: "BUNLAR HEP KAFIR SENARISTLERIN IŞI.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et mattis nisl, in cursus felis. Fusce aturna pulvinar, porta lacus et, interdum velit. Aenean placerat ullamcorper enim, vitae sollicitudin elitaliquet ac. Integer sed dignissim arcu. Donec malesuada sollicitudin tincidunt. Suspendisse congue eratut felis blandit, id aliquam ligula suscipit. Cras eros ipsum, pellentesque sed odio vitae, ullamcorpervestibulum mauris. Quisque cursus, neque non scelerisque consectetur, justo turpis hendrerit neque, sitamet malesuada mauris diam sed elit. Praesent dignissim condimentum nisl, non pretium est bibendum ut.Curabitur pretium eros sed leo sollicitudin, in placerat nisi commodo. Vestibulum a lectus eget orcivehicula molestie et non purus. Mauris risus lacus, facilisis id feugiat egestas, semper vel ex."
    },
    {
        title: "Stannis aslında kızını yakmadı",
        article: "BUNLAR HEP KAFIR SENARISTLERIN IŞI.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et mattis nisl, in cursus felis. Fusce aturna pulvinar, porta lacus et, interdum velit. Aenean placerat ullamcorper enim, vitae sollicitudin elitaliquet ac. Integer sed dignissim arcu. Donec malesuada sollicitudin tincidunt. Suspendisse congue eratut felis blandit, id aliquam ligula suscipit. Cras eros ipsum, pellentesque sed odio vitae, ullamcorpervestibulum mauris. Quisque cursus, neque non scelerisque consectetur, justo turpis hendrerit neque, sitamet malesuada mauris diam sed elit. Praesent dignissim condimentum nisl, non pretium est bibendum ut.Curabitur pretium eros sed leo sollicitudin, in placerat nisi commodo. Vestibulum a lectus eget orcivehicula molestie et non purus. Mauris risus lacus, facilisis id feugiat egestas, semper vel ex."
    },
    {
        title: "Stannis aslında kızını yakmadı",
        article: "BUNLAR HEP KAFIR SENARISTLERIN IŞI.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et mattis nisl, in cursus felis. Fusce aturna pulvinar, porta lacus et, interdum velit. Aenean placerat ullamcorper enim, vitae sollicitudin elitaliquet ac. Integer sed dignissim arcu. Donec malesuada sollicitudin tincidunt. Suspendisse congue eratut felis blandit, id aliquam ligula suscipit. Cras eros ipsum, pellentesque sed odio vitae, ullamcorpervestibulum mauris. Quisque cursus, neque non scelerisque consectetur, justo turpis hendrerit neque, sitamet malesuada mauris diam sed elit. Praesent dignissim condimentum nisl, non pretium est bibendum ut.Curabitur pretium eros sed leo sollicitudin, in placerat nisi commodo. Vestibulum a lectus eget orcivehicula molestie et non purus. Mauris risus lacus, facilisis id feugiat egestas, semper vel ex."
    }
];

function seedDB() {
    //remove all
    Entry.remove({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("removed entries!");
            //create campgroud
            data.forEach(function (seed) {
                Entry.create(seed, function (err, entry) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added entries");
                    };
                });
            });
        }
    });
};
module.exports = seedDB;