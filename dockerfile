FROM node
RUN mkdir /code
COPY metax/ /code/
WORKDIR /code
RUN yarn
RUN yarn build
CMD yarn start