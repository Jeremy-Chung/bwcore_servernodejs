# v2.0.3
1. [Added] 支援 http api 檔案上傳
1. [Fixed] 不一定要設定 websocket events
1. [Removed] 不支援 cluster (改由pm2設定)
1. [Removed] 抽出 `PropTypes` 模組

# v2.0.2

1. 使用 `mongodb@2.2.33`，新版不相容
1. 用 `safeRequire` 載入同一個 path 中的模組時，強制將名稱轉換成 camelCase

----

# v2.0.1

1. 獨立 `PropType` 模組
1. 建立 Basic Model

----

# v2.0.0

1. 獨立 `Passport` 為模組
1. 使用 `eslint` 並加入 `pre-commit` 加強風格一致性
1. 去除 `NODE_ENV` 的使用，保持 Game Server 中立性
1. `bind-routes` 不使用 `bind` 建立新的 Routing Action，避免建立太多 function

----

# v1.0.4

1. `Http` API 可設定 `middleware`
1. 新增 `keycloak` 的 error message parser
1. Passport 可 Inject and Overwrite Config (`configs/keycloak.js` & `configs/wallets.js`)
1. Http 及 Web Socket的參數驗證
1. 使用 Eslint

----

# v1.0.3

1. ORM 支援 `Promise`
1. 提供 `safeRequire`
1. 提供每個 ws 及 http 的 router context 指定為 `application` (如非 arrow function)
1. 刪除回傳 `express`

----

`Yesterday is history, tomorrow is a mystery`
