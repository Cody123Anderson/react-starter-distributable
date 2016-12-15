FROM node:6
MAINTAINER Cody Anderson <cody@serenadedates.com>

RUN mkdir -p /usr/serenade-landing-page
COPY . /usr/serenade-landing-page
WORKDIR /usr/serenade-landing-page
RUN npm install --production

ENV PORT 3000
EXPOSE  $PORT

CMD ["npm", "start"]
