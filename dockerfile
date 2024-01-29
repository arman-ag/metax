FROM node

RUN mkdir /metax
WORKDIR /metax
COPY . /metax/
RUN yarn
RUN yarn build
CMD yarn start 
