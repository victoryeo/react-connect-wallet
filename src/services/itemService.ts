import { useQuery } from "react-query";
import { collectionId, organizationId } from "../config";
import apiInstance from "../utils/api";

const fetchItems = async (organizationId: string, collectionId: string) => {
    let searchParams = new URLSearchParams();
    searchParams.set("collection_id", collectionId);

    const { data } = await apiInstance.get(
        `/v2/public/${organizationId}/items?${searchParams}`
    );
    return data;
};

export const useItems = () => {
    const { isError, isSuccess, data } = useQuery(
        ["items", organizationId, collectionId],
        () => {
            if (!organizationId || !collectionId) {
                return Error(
                    "Please set organizationId and collectionId in the .env.local file"
                );
            }

            return fetchItems(organizationId, collectionId);
        }
    );

    return {
        items: Boolean(data) ? data.items : [],
        isError,
        isSuccess,
    };
};