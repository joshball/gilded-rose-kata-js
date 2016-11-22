require('chai').should();
var expect = require('chai').expect;

import { Item, update_quality, ageItem } from '../src/guilded-rose';

describe("Gilded Rose", function () {

    describe('ageItem', function () {

        describe('non-special case items', function () {

            it("should not change name", function () {
                var foo = new Item("foo", 10, 5);
                ageItem(foo);
                foo.name.should.be.equal('foo');
            });

            it("should decrement sell_in by 1", function () {
                var foo = new Item("foo", 10, 5);
                ageItem(foo);
                foo.sell_in.should.be.equal(9);
            });

            it("should decrement quality by 1", function () {
                var foo = new Item("foo", 10, 5);
                ageItem(foo);
                foo.quality.should.be.equal(4);
            });

            it("should NOT decrement quality by one if at zero", function () {
                var foo = new Item("foo", 0, 0);
                ageItem(foo);
                foo.quality.should.be.equal(0);
            });

            it("should decrement sell_in by one even at zero", function () {
                var foo = new Item("foo", 0, 0);
                ageItem(foo);
                foo.sell_in.should.be.equal(-1);
            });

            it("should decrement quality by 2 if sell_in is less than zero", function () {
                var foo = new Item("foo", -1, 5);
                ageItem(foo);
                foo.quality.should.be.equal(3);
            });

        })


        describe("special case items", function () {

            describe("Aged Brie", function () {

                it("should increment quality as ages", function () {
                    var agedBrie = new Item("Aged Brie", 5, 10);;
                    ageItem(agedBrie);
                    agedBrie.quality.should.be.equal(11);
                });
            })


        })
    })

    function getAllTestItems() {
        var allItems = {
            dexterityVest: new Item('+5 Dexterity Vest', 10, 20),
            agedBrie: new Item('Aged Brie', 2, 0),
            items: []
        };
        allItems.items.push(allItems.dexterityVest);
        allItems.items.push(allItems.agedBrie);
        items.push(agedBrie);
        // items.push(new Item('Elixir of the Mongoose', 5, 7));
        // items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
        // items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
        // items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
        // items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
        // items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));
        // // this conjured item does not work properly yet
        // items.push(new Item('Conjured Mana Cake', 3, 6));
        return allItems;
    }

});
