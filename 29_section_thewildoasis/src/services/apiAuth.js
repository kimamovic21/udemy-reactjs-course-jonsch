import supabase, { supabaseUrl } from './supabase';

export const signup = async ({ fullName, email, password }) => {
    const {data, error} = await supabase.auth.signUp({
        email, password, options: {
            data: {
                fullName,
                avatar: '',
            },
        },
    });

    if (error) throw new Error(error.message);
    console.error(error);

    return data;
};

export const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,  
        password
    });
    // console.log(data);

    if (error) throw new Error(error.message);
    console.error(error);

    return data;
};

export const getCurrentUser = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();
    // console.log(data);

    if (error) throw new Error(error.message);
    console.error(error);

    return data?.user;
};

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) throw new Error(error.message);
    console.error(error);
};

export const updateCurrentUser = async ({ password, fullName, avatar }) => {
    // 1. Update password OR fullName
    let updateData;

    if (password) updateData = { password };
    if (fullName) updateData = { data: { fullName }};

    const { data, error: updateUserError } = await supabase.auth.updateUser(updateData);

    if (updateUserError) throw new Error(updateUserError.message);
    if (!avatar) return data;

    // 2. Upload the avatar image
    const fileName = `avatar-${data.user.id}-${Math.random()}`;

    const { error: storageError } = await supabase.storage.from('avatars').upload(fileName, avatar);

    if (storageError) throw new Error(storageError.message);

    // 3. Update avatar in the user 
    const { data: updatedUser, error: updatedUserError } = await supabase.auth.updateUser({ data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    }})

    if (updatedUserError) throw new Error(updatedUserError.message);

    return updatedUser;
};