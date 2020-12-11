<template>
  <div 
    :class="[
      'x-button',
      type ? 'x-button--' + type : '',
      size ? 'x-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  }
}
</script>

<style scoped lang="less">
  .x-button {
    display: inline-block;
    padding: 3px 6px;
    background: #fff;
    color: #333;
    border: 1px solid #e1e1e1;
    &.x-button--medium{
      font-size: 16px;
    }
    &.x-button--small{
      font-size: 14px;
    }
    &.x-button--mini{
      font-size: 12px;
    }
    &.x-button--primary{
      background: dodgerblue;
      color: #fff;
      border: 1px solid dodgerblue
    }
    &.x-button--warning{
      background: orange;
      color: #fff;
      border: 1px solid orange
    }
    &.x-button--error{
      background: orangered;
      color: #fff;
      border: 1px solid orangered
    }
    &.x-button--success{
      background: mediumseagreen;
      color: #fff;
      border: 1px solid mediumseagreen
    }
    &.is-round{
      border-radius: 4px;
    }
    &.is-circle{
      border-radius: 50%;
    }
    &.is-disabled{
      background-color: #fff;
      border-color: #ebeef5;
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.is-plain{
      background: #fff;
      &.x-button--primary{
        color: dodgerblue;
      }
      &.x-button--warning{
        color: orange;
      }
      &.x-button--error{
        color: orangered;
      }
      &.x-button--success{
        color: mediumseagreen;
      }
    }
  }

</style>
