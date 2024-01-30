# node-js-rabbitmq
This repository demonstrate the proper installation of RabbitMQ to your local machine and use JavaScript to demo producing and receiving of data from queue.

### 👣 How To Install And Use
1. [Download](https://rabbitmq.com/download.html) and Install RabbitMQ to your local machine.
2. Clone the repository
3. Run `npm install`
4. Start a node in the foreground: `CONF_ENV_FILE="/opt/homebrew/etc/rabbitmq/rabbitmq-env.conf" /opt/homebrew/opt/rabbitmq/sbin/rabbitmq-server`
6. Start local RabbitMQ node: `brew services start rabbitmq`
7. Enable all feature flags: `/opt/homebrew/sbin/rabbitmqctl enable_feature_flag all`

### 🛑 Termination of local RabbitMQ node
`brew services stop rabbitmq`
