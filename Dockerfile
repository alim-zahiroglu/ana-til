# ---------- 1-باسقۇچ: build ----------
FROM node:20-alpine AS build
WORKDIR /app

# تەۋەلىكلەرنى ئالدىن ئورنىتىش (cache ئۈچۈن)
COPY package*.json ./
RUN npm ci

# قالغان كودنى كۆچۈرۈپ build قىلىش
COPY . .
RUN npm run build

# ---------- 2-باسقۇچ: nginx بىلەن تارقىتىش ----------
FROM nginx:alpine AS runtime

# build نەتىجىسىنى nginx غا كۆچۈرۈش
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
