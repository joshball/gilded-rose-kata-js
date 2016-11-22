export function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

export var items = []

export function getQualityChange(item) {
    var qualityChange = -1;
    var sell_in = item.sell_in;


    if (sell_in < 0) {
        qualityChange = qualityChange * 2;
    }

    if (item.name == "Aged Brie") {
        // TODO: find out if aged brie increases quality by 2 after sell by date
        qualityChange = +1;
    }

    if (item.name == "Sulfuras") {
        // TODO: find out if aged brie increases quality by 2 after sell by date
        qualityChange = 0;
    }

    return qualityChange;
}

export function ageItem(item) {

    var qualityChange = getQualityChange(item);

    item.sell_in -= 1;


    if (item.quality > 0) {
        item.quality = item.quality + qualityChange;
    }
    if (item.quality > 50) {
        item.quality = 50;
    }

    // ASSERTIONS:
    // The Quality of an item is never negative
    if (item.quality < 0) {
        throw new Error("Item.quality cannot be less than zero");
    }
    // The Quality of an item is never more than 50
    if (item.quality > 50) {
        throw new Error("Item.quality cannot be greater than 50");
    }
}


export function update_quality() {

    for (var i = 0; i < items.length; i++) {


        if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (items[i].quality > 0) {
                if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                    items[i].quality = items[i].quality - 1
                }
            }
        }

        else {
            if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1
                if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (items[i].sell_in < 11) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1
                        }
                    }
                    if (items[i].sell_in < 6) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1
                        }
                    }
                }
            }
        }

        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].sell_in = items[i].sell_in - 1;
        }

        if (items[i].sell_in < 0) {
            if (items[i].name != 'Aged Brie') {
                if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (items[i].quality > 0) {
                        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                            items[i].quality = items[i].quality - 1
                        }
                    }
                }
                else {
                    items[i].quality = items[i].quality - items[i].quality
                }
            }
            else {
                if (items[i].quality < 50) {
                    items[i].quality = items[i].quality + 1
                }
            }
        }
    }
}

