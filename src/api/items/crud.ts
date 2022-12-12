import { supabase } from "../init";

async function getItems() {
    const { data, error } = await supabase
        .from("items")
        .select();

    console.log(data);

    if (error) throw error;
    return data;
}

async function getItemByName(name: string) {
    const { data, error } = await supabase
        .from("items")
        .select()
        .eq("name", name);

    if (error) throw error;
    return data[0];
}

async function createItem(name: string, description: string, price: number) {
    const { data, error } = await supabase
        .from("items")
        .insert([{ name, description, price }]);

    if (error) throw error;
    return data;
}

async function updateItem(id: string, name: string, description: string, price: number) {
    const { data, error } = await supabase
        .from("items")
        .update({ name, description, price })
        .eq("id", id);

    if (error) throw error;
    return data;
}

async function deleteItem(id: string) {
    const { data, error } = await supabase
        .from("items")
        .delete()
        .eq("id", id);

    if (error) throw error;
    return data;
}

export { getItems, getItemByName, createItem, updateItem, deleteItem };