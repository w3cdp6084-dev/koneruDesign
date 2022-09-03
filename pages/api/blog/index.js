import {client} from "../../../libs/client";
export const getSearchBooks = async (req, res) => {
  // 検索したいキーワードをqueryから取得
  const keyword = req.query.keyword;

  // 検索キーワードを設定した状態でmicroCMSにリクエストを送信。
  const response = await client.get({
    endpoint: "blog",
    queries: {
      q: decodeURI(keyword),
    },
  });
  return res.status(200).json(response);
};

export default getSearchBooks;